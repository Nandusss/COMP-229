/**
 * controller which controlls all the pages that are displayed
 */

 exports.home = function(req, res, next) {
    res.json(
      {
        success: true,
        message: "This is the home endpoint."
      }
    )
  };