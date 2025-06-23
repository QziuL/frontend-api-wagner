export default async function handler(req, res) {
  const response = await fetch('http://wagnerweinert.com.br/api_banco.php', {
    method: req.method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: req.method === 'POST' ? JSON.stringify(req.body) : undefined,
  });

  const data = await response.json();

  res.status(200).send(data);
}
