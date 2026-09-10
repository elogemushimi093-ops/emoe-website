export async function onRequestPost(context) {
  try {
    const data = await context.request.json();

    const requiredFields = [
      "nom",
      "prenoms",
      "postNom",
      "dateNaissance",
      "telephone",
      "email",
      "pays",
      "ville",
      "eglise",
      "fonction"
    ];

    for (const field of requiredFields) {
      if (!data[field] || String(data[field]).trim() === "") {
        return new Response(
          JSON.stringify({
            success: false,
            message: "Veuillez remplir tous les champs obligatoires."
          }),
          
          {
            status: 400,
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
      }
    }

    const message = `
Nouvelle candidature E.M.O.E.

Nom : ${data.nom}
Prénoms : ${data.prenoms}
Post-nom : ${data.postNom}
Date de naissance : ${data.dateNaissance}
Téléphone : ${data.telephone}
Email : ${data.email}
Pays : ${data.pays}
Ville : ${data.ville}
Église de provenance : ${data.eglise}
Fonction dans l’église : ${data.fonction}
`;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${context.env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: context.env.EMAIL_FROM || "onboarding@resend.dev",
        to: ["ecoleombredeleternel@gmail.com"],
        subject: "Nouvelle candidature E.M.O.E",
        text: message
      })
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "La candidature n’a pas pu être envoyée."
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Votre candidature a été envoyée avec succès."
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Une erreur est survenue. Veuillez réessayer."
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
}
