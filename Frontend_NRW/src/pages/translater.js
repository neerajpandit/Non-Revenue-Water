const translate = require('google-translate-api');

const translateText = async (text, targetLanguage) => {
  try {
    const result = await translate(text, { to: targetLanguage });
    return result.text;
  } catch (error) {
    console.error('Translation error:', error);
    return null;
  }
};

export default translateText;