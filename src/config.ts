
let serverURL = 'http://localhost:8900';

if (process.env.NODE_ENV === 'production') {
    serverURL = 'https://philyoo.herokuapp.com'
}

export default {
    asset_id: '50cd5b7apq',
    serverURL,
}