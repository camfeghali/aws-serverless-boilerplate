import { APIGatewayEvent } from "aws-lambda";

export async function health(event: APIGatewayEvent) {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "99.9% O.K." }),
    };
}
