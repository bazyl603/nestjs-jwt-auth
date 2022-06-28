/* eslint-disable prettier/prettier */
import { JwtPayload } from '.';

export type JwtPayloadRt = JwtPayload & { refreshToken: string };
