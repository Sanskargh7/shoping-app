import Joi from "joi";
class Authentication {
  //validate incoming request
  static validateUserInfo = (req, res, next) => {
    const validateSchema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["net", "com"] } })
        .required(),
      password: Joi.string()
        .min(4)
        .max(6)
        .alphanum()
        .required()
        .messages({ "string.base": "please enter valid password" }),

      isAdmin: Joi.boolean().default(false),
    });
    try {
      const { error } = validateSchema.validate(req.body, {
        abortEarly: false,
      });
      if (error) {
        return res.status(200).json({ data: error.message });
      } else {
        next();
      }
    } catch (error) {
      return res.status(200).json({ message: error.message });
    }
  };
}
export default Authentication;
