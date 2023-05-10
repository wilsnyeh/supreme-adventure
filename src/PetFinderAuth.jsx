
function PetFinderAuth() {
    const token = 
        {"grant_type": "client_credntials",
        "client_id": "`${client-id}`",
        "client_secret": "`${client-secret}`"
    }

    const auth = {"Authorization": "`Bearer ${token}`"}
}