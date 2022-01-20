import ShortUrl from "../models/shortUrls.js";

export const servePage = async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.render("index", { shortUrls: shortUrls });
};

export const postUrl = async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl });
  res.redirect("/");
};
