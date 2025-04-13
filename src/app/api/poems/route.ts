export async function POST(request: Request) {
    const body = await request.json();
    const { name } = body;
    console.log("name", name);
    const newPoem = { id: Date.now(), name };

    return new Response(JSON.stringify(newPoem), {
        "status": 201,
        "headers": {
            "Content-Type": "application/json",
            "Cache-Control": "no-store",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "*",
        },
    });
}

export async function GET() {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },

  ]

  console.table(users);

  return new Response(JSON.stringify(users), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "*",
    },
  });
}
