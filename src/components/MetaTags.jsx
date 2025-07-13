import { Helmet } from "react-helmet-async";

const MetaTags = () => {
  const title = "Chá da Lesllie e do Jean - 30/08/2025";
  const description =
    "Celebre conosco nossa partida para Portugal! Almoço festivo cheio de amor e alegria.";
  const imageUrl = "https://i.imgur.com/NOTqiFr.png";
  const siteUrl = window.location.href;

  return (
    <Helmet>
      {/* Meta tags básicas */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook (WhatsApp usa isso) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Foto do casal Lesllie e Jean" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default MetaTags;
