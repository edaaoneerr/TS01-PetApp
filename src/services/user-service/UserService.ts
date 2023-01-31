import ApiManager from "@services/ApiManager";

export const postUser = async (data:any) => {
    try {
        const result = await ApiManager('/user', {
            method: 'POST',
            headers: {'content-type': 'application/json',},
            data: data,
        });
        console.log(result);
        return result;
    } catch (error:any) {
        console.log(error);
        return error.response.data;
    }
}