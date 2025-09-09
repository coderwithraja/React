exports.getProducts = (req,res,next) => {
  
    res.json({
        success: true,
        meassage: "All products fetched successfully",
    })

}