/**
 * GET /
 * Homepage
 */
exports.homepage=async(req, res) =>{
    res.render('index', {title: 'Andréia Neves de Sá'});
    
    }