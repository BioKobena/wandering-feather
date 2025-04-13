import { NextRequest} from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
) {

    const cl = request.headers;
    console.log(cl);
    const id = (await params).id;
    console.log("id", id);
    return new Response(JSON.stringify({ id, name: `Poem ${id}` }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}

// export async function DELETE(
//     request: NextRequest,
//     { params }: { params: Promise<{ id: string }> },
// ) {
//     const id = (await params).id;
//     return new Response(null, {
//         status: 204,
//     });
// }

// export async function PUT(
//     request: NextRequest,
//     { params }: { params: { id: string } },
// ) {
//     const id = (await params).id;
//     console.log("id", id);
//     return new Response(JSON.stringify({ id }), {
//         status: 200,
//         headers: {
//             "Content-Type": "application/json",
//         },
//     });
// }
