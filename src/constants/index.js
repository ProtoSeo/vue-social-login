const API_BASE_URL = 'http://localhost:8080';
const OAUTH2_REDIRECT_LOGIN_URI = 'http://localhost:5173/oauth2/redirect/login'
const OAUTH2_REDIRECT_SIGNUP_URI = 'http://localhost:5173/oauth2/redirect/signup'
const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri='
const KAKAO_AUTH_URL = API_BASE_URL + '/oauth2/authorize/kakao?redirect_uri='
const NAVER_AUTH_URL = API_BASE_URL + '/oauth2/authorize/naver?redirect_uri='
const TWITCH_AUTH_URL = API_BASE_URL + '/oauth2/authorize/twitch?redirect_uri='

export default {
    API_BASE_URL: API_BASE_URL,
    OAUTH2_REDIRECT_LOGIN_URI: OAUTH2_REDIRECT_LOGIN_URI,
    OAUTH2_REDIRECT_SIGNUP_URI: OAUTH2_REDIRECT_SIGNUP_URI,
    GOOGLE_AUTH_URL: GOOGLE_AUTH_URL,
    KAKAO_AUTH_URL: KAKAO_AUTH_URL,
    NAVER_AUTH_URL: NAVER_AUTH_URL,
    TWITCH_AUTH_URL: TWITCH_AUTH_URL
}