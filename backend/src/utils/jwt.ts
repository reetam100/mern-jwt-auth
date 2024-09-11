import { SignOptions } from "jsonwebtoken";
import { SessionDocument } from "../models/session.model"
import { UserDocument } from "../models/user.model";

export type RefreshTokenPayload = {
    sessionId: SessionDocument["_id"];
}

export type AccessTokenPayload = {
    userId: UserDocument["_id"];
    sessionId: SessionDocument["_id"];
}

type SignOptionsAndSecret = SignOptions & {
    secret: string;
}

export const signToken = (
    payload: AccessTokenPayload | RefreshTokenPayload,
    options?: SignOptionsAndSecret
)