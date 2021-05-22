/**
 * Allow: POST
 *
 * POST /api/rooms/:room-id/chat
 *
 * 메시지를 보냄
 *
 * - success: 201
 * - invalid query or body: 400
 * - unauthorized user for the room: 401
 * - no room: 404
 *
 * ```
 * Request Body
 * {
 *   message: string,
 * }
 * ```
 */

import { HttpError } from "@coops/error";
import { withRedisClient } from "@coops/redis";

import { apiRouter } from "../../../../app/utils/apiRouter";

export default apiRouter({
  POST: async (req, res) => {
    return withRedisClient(async (client) => {
      throw new HttpError(501);
    });
  },
});
