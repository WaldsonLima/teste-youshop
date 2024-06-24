import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://api.deepspacestore.com/offers/:offer_code', (params) => {
    const offer_code = params.params.offer_code;

    if(offer_code === "31233") {
        return HttpResponse.json({
            name: "Monitoria de design",
            price: "R$ 350,00",
            description: "Essa monitoria conta com algumas coisas sobre design.",
            image: "https://www.dropbox.com/scl/fi/x07cfi4qiryxkxq86fsuj/ai-generated-8520565_1280.jpg?rlkey=cohsk8dpg5628tqgmkumyta6d&st=3zosx9ck&raw=1",
            offer_code: offer_code
        })
    }

    if(offer_code === "41234") {
        return HttpResponse.json({
            name: "Curso de Fron-End",
            price: "R$ 250,00",
            description: "Esse curso conta com algumas coisas sobre design.",
            image: "https://www.dropbox.com/scl/fi/x07cfi4qiryxkxq86fsuj/ai-generated-8520565_1280.jpg?rlkey=cohsk8dpg5628tqgmkumyta6d&st=3zosx9ck&raw=1",
            offer_code: offer_code
        })
    }

    if(offer_code === "56412") {
        return HttpResponse.json({
            name: "Curso de marketing",
            price: "R$ 500,00",
            description: "Esse curso conta com algumas coisas sobre marketing.",
            image: "https://www.dropbox.com/scl/fi/x07cfi4qiryxkxq86fsuj/ai-generated-8520565_1280.jpg?rlkey=cohsk8dpg5628tqgmkumyta6d&st=3zosx9ck&raw=1",
            offer_code: offer_code
        })
    }

    if(offer_code === "98721") {
        return HttpResponse.json({
            name: "Guia de database",
            price: "R$ 400,00",
            description: "Esse guia conta com algumas coisas sobre database.",
            image: "https://www.dropbox.com/scl/fi/x07cfi4qiryxkxq86fsuj/ai-generated-8520565_1280.jpg?rlkey=cohsk8dpg5628tqgmkumyta6d&st=3zosx9ck&raw=1",
            offer_code: offer_code
        })
    }

    if(offer_code === "10478") {
        return HttpResponse.json({
            name: "Curso de edição",
            price: "R$ 320,00",
            description: "Esse curso conta com algumas coisas sobre edição.",
            image: "https://www.dropbox.com/scl/fi/x07cfi4qiryxkxq86fsuj/ai-generated-8520565_1280.jpg?rlkey=cohsk8dpg5628tqgmkumyta6d&st=3zosx9ck&raw=1",
            offer_code: offer_code
        })
    }

    if(offer_code === "39568") {
        return HttpResponse.json({
            name: "Monitoria de inglês",
            price: "R$ 980,00",
            description: "Essa monitoria conta com algumas coisas sobre inglês.",
            image: "https://www.dropbox.com/scl/fi/x07cfi4qiryxkxq86fsuj/ai-generated-8520565_1280.jpg?rlkey=cohsk8dpg5628tqgmkumyta6d&st=3zosx9ck&raw=1",
            offer_code: offer_code
        })
    }

    return
  }),

  http.post('https://api.deepspacestore.com/offers/:offer_code/create_order', async ({request}) => {
    const data = await request.json()
  }),
]
