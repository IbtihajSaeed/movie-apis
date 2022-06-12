const postValidator = async (req, res, next) => {
	try {
		if (req.body.name=="" || req.body.name==undefined) {
			throw new Error("name required");
		}
        if (req.body.description=="" || req.body.description==undefined) {
			throw new Error("description required");
		}

		if (req.body.genreId=="" || req.body.genreId==undefined) {
			throw new Error("genreId required");
		}
        if (req.body.rating=="" || req.body.rating==undefined) {
			throw new Error("rating required");
		}

		if (req.body.duration=="" || req.body.duration==undefined) {
			throw new Error("duration required");
		}
        if (req.body.releaseDate=="" || req.body.releaseDate==undefined) {
			throw new Error("releaseDate required");
		}
       
       
        
		next();
	} catch (error) {
		next(error);
	}
};

module.exports=postValidator;