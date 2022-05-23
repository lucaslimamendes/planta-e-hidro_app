module.exports = server => {
    server.get('/v2/user', (req, res) => {
        if( !req.headers['authorization'] ){
            return res.status(401).jsonp({ error: 'token invalid' })
        }

        return res.status(200).jsonp({ userId: '628b23f1b39a98268c712d69', userName: 'theo jose', token: 'kdjsakjdhkasdas'  });
    });

    server.get('/v1/greenhouses', (req, res) => {
        if( !req.headers['authorization'] ){
            return res.status(401).jsonp({ error: 'token invalid' })
        }

        return res.status(200).jsonp([
            {
                _id: "628b2671b39a98268c712d9d",
                userId: "628b23f1b39a98268c712d69",
                name: "MyGreenNew",
                channelQty: 0,
                address: "Street Orquidea, 2",
                lastModified: "2022-05-23T06:16:03.333Z",
                __v: 0
            }
        ]);
    });

    server.post('/login', (req, res) => {
        if( !req.body.email || !req.body.password ){
            return res.status(412).jsonp({ error: 'required fields email and password' })
        }

        return res.status(200).jsonp({ userId: '628b23f1b39a98268c712d69', userName: 'theo jose', token: 'kdjsakjdhkasdas'  });
    });

    server.post('/v1/users', (req, res) => {
        if( !req.body.email || !req.body.password || !req.body.name ){
            return res.status(412).jsonp({ error: 'required fields email and password' })
        }

        return res.status(201).jsonp({});
    });
};
