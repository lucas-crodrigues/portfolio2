const canva = require('canvacord');
const moment = require('moment');

async function runScript() {
    // Log in to Canva
    await canva.login("jess.crodrigues@gmail.com", "895154JessHey");

    // Get the template design
    const template_id = "DAFbJtzLWGc";
    const template = await canva.getDesign(template_id);

    // Prompt the user for the start date and end date
    const start_date_str = prompt("Enter the start date (YYYY-MM-DD): ");
    const end_date_str = prompt("Enter the end date (YYYY-MM-DD): ");
    const start_date = moment(start_date_str, "YYYY-MM-DD");
    const end_date = moment(end_date_str, "YYYY-MM-DD");

    // Prompt the user for the day of the week to use
    const day_of_week = prompt("Enter the day of the week to use (Monday, Tuesday, etc.): ");

    // Loop through each day between the start date and end date
    let current_date = start_date;
    while (current_date <= end_date) {
        // Add a new page to the template design
        const new_page = await canva.addPage(template_id, { name: current_date.format("YYYY-MM-DD") });

        // Find and update the day of the year and day of the week text elements on the new page
        for (const element of new_page.elements) {
            if (element.type === "text") {
                if (element.text.includes("day of the year")) {
                    const new_text = element.text.replace("day of the year", current_date.format("DDD"));
                    await canva.updateTextElement(new_page.id, element.id, { text: new_text });
                } else if (element.text.includes("day of the week")) {
                    let new_text = element.text.replace("day of the week", current_date.format("dddd"));
                    new_text = new_text.replace("Monday", day_of_week);
                    await canva.updateTextElement(new_page.id, element.id, { text: new_text });
                }
            }
        }

        // Save the updated design
        await template.save();

        // Move on to the next day
        current_date.add(1, 'day');
    }
}

runScript();