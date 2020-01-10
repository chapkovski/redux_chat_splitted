import moment from "moment";
// defines structures for sending message to history and to/from other fields.
// adds an option to validate and/or raise errors if types are wrong.

const genericMessage = ({
  source,
  text,
  input_type = "message",
  extra = {}
}) => {
  const m = moment().format("HH:mm:ss");
  return {
    input_type: "message",
    source: source,
    text: text,
    timestamp: m,
    ...extra
  };
};
export const formMessage = ({text, input_name}) => {
  const final_text = input_name + ": " + text;
  const extra = { form_data: true, form_field_name: input_name };
  return genericMessage({source:'user', text:final_text, extra:extra});
};
export const userMessage = text =>
  genericMessage({ source: "user", text: text });
export const botMessage = text => {
  return genericMessage({ source: "bot", text: text });
};
