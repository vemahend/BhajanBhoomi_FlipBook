//https://www.uglifyjs.net/


function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.className = "show";
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}
const url = "https://vvxqukjslyhfsurehrnt.supabase.co";  // Replace with your actual URL
const testing = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2eHF1a2pzbHloZnN1cmVocm50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyMDQ0OTcsImV4cCI6MjA1ODc4MDQ5N30.OHQhxs0GOyGgv0NMk_k_ZDxRRLHvMxjbyYJc9z7UYP8"; // Replace with your actual key
const { createClient } = supabase;
const supabaseClient = createClient(url, testing);
document.getElementById("feedbackform").addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    let rating = document.querySelector('input[name="rating"]:checked');
    rating = rating ? rating.value : "No rating selected";
    const suggestion = document.getElementById("message").value;

    // Insert data into Supabase
    const { data, error } = await supabaseClient.from("FeedbackForm").insert([{ name, email, mobile, rating, suggestion }]);

    if (error) {
        showToast("Error: " + error.message);
    } else {
        showToast("Brilliant! Your suggestion means a lot to us!");
        document.getElementById("feedbackform").reset(); // Clear form
    }
});

