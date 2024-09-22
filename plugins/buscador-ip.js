import axios from 'axios';

let handler = async (m, { conn, text }) => {
  await m.reply("Buscando...");
  if (!text) return conn.reply(m.chat, "Please enter a valid IP address", m);

  try {
    let res = await axios.get(`http://ip-api.com/json/${text}?fields=status,message,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,isp,org,as,mobile,hosting,query`);
    const data = res.data;

    if (data.status !== "success") {
      return conn.reply(m.chat, data.message || "Falló", m);
    }

    let ipsearch = ` 
    𝐈𝐏 𝐈𝐍𝐅𝐎

    IP : ${data.query}
    Country : ${data.country}
    County code: ${data.countryCode}
    Province : ${data.regionName}
    Province Code : ${data.region}
    City : ${data.city}
    District : ${data.district}
    Code postal : ${data.zip}
    Coordinates : ${data.lat}, ${data.lon}
    Time Zone : ${data.timezone}
    ISP : ${data.isp}
    Organization : ${data.org}
    AS : ${data.as}
    Mobile : ${data.mobile ? "Yes" : "No"}
    Hosting : ${data.hosting ? "Yes" : "No"}
    `.trim();

    await conn.reply(m.chat, ipsearch, m);
  } catch (error) {
    console.error(error);
    await conn.reply(m.chat, 'An error occurred while retrieving IP information.', m);
  }
}

handler.tags = ['tools'];
handler.command = /^(ip|ipcheck|ipcek)$/i;
handler.owner = true;

export default handler;
