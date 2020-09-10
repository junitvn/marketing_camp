
export const PICTURE_SIZE = 300;
export const pageImageUri = (pageID, accessToken) =>
    `https://graph.facebook.com/${pageID}/picture?access_token=${accessToken}&height=${PICTURE_SIZE}&width=${PICTURE_SIZE}&type=square`;

export const pageInfoApi = (pageID, accessToken) =>
    `https://graph.facebook.com/${pageID}/?fields=fan_count,cover&access_token=${accessToken}&height=${PICTURE_SIZE}&width=${PICTURE_SIZE}`