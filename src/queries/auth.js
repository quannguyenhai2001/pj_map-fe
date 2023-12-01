import { CallApiByBody } from "api/configApi";

export const signIn = async (payload) => {
    const rs = await CallApiByBody("user/login", "POST", null, {
      params: payload,
    });
    const {accessToken, role} = rs
    getRole(role)
    return rs;
};
export const getRole = (role) => {
    return role;
}