using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        [HttpGet("not-found")]
        public ActionResult GetNotFound()
        {
            return NotFound();
        }

        [HttpGet("bad-request")]
        public ActionResult GetBadRequest()
        {
            return BadRequest();
        }

        [HttpGet("server-error")]
        public ActionResult GetServerError()
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }

        [HttpGet("unathorized")]
        public ActionResult GetUnathorized()
        {
            return Unauthorized();
        }
    }
}