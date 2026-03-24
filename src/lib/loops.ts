const LOOPS_API_KEY = process.env.LOOPS_API_KEY!;
const LOOPS_BASE_URL = "https://app.loops.so/api/v1";

/**
 * Add or update a contact in Loops for marketing emails.
 */
export async function addLoopsContact({
  email,
  firstName,
  userId,
}: {
  email: string;
  firstName?: string;
  userId?: string;
}) {
  return fetch(`${LOOPS_BASE_URL}/contacts/create`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${LOOPS_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      firstName,
      userId,
      source: "app",
    }),
  });
}
