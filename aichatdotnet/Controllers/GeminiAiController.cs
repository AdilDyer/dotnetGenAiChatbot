using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace YourNamespace.Controllers
{
    [ApiController]
    [Route("GeminiAi")]
    public class GeminiAiController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private const string API_KEY = "";
        private const string MODEL = "gemini-2.0-flash";

        public GeminiAiController(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        [HttpPost("chat")]
        public async Task<IActionResult> Chat([FromBody] ChatRequest request)
        {
            var endpoint = $"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={API_KEY}";

            var payload = new
            {
                contents = new[]
                {
                    new {
                        parts = new[]
                        {
                            new { text = request.Prompt }
                        }
                    }
                }
            };

            var jsonPayload = JsonConvert.SerializeObject(payload);
            var content = new StringContent(jsonPayload, Encoding.UTF8, "application/json");

            var response = await _httpClient.PostAsync(endpoint, content);
            var responseString = await response.Content.ReadAsStringAsync();

            if (!response.IsSuccessStatusCode)
                return StatusCode((int)response.StatusCode, responseString);

            dynamic result = JsonConvert.DeserializeObject(responseString);
            string outputText = result?.candidates[0]?.content?.parts[0]?.text;

            return Ok(new { reply = outputText });
        }
    }

    public class ChatRequest
    {
        public string Prompt { get; set; }
    }
}
