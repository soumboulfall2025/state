import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        // Initialisation de l'état du composant
        this.state = {
            // Objet contenant les informations de la personne
            Personne: {
                fullName: "Soumboul Fall",
                bio: "Développeur passionné par les technologies web.",
                imgSrc: "https://media.licdn.com/dms/image/v2/D4E03AQH1vAik6eARrA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1676235976687?e=2147483647&v=beta&t=seSdLC65cVnvxgpGYg4_xuiJSyDDPxbYzzX3K1t6q_w",
                profession: "Développeur Web",
            },
            // Booléen pour afficher ou cacher le profil
            montre: false,
            // Temps écoulé depuis le montage du composant
            elapsedTime: 0,
        };

        // Référence pour le timer
        this.timer = null;
    }

    // Méthode appelée après le montage du composant
    componentDidMount() {
        // Démarrage d'un intervalle pour incrémenter le temps écoulé
        this.timer = setInterval(() => {
            this.setState((prevState) => ({
                elapsedTime: prevState.elapsedTime + 1,
            }));
        }, 1000); // Mise à jour toutes les secondes
    }

    // Méthode appelée juste avant le démontage du composant
    componentWillUnmount() {
        // Nettoyage de l'intervalle pour éviter les fuites de mémoire
        clearInterval(this.timer);
    }

    // Méthode pour basculer l'état "montre"
    toggleMontrer = () => {
        this.setState((prevState) => ({
            montre: !prevState.montre,
        }));
    };

    // Méthode de rendu du composant
    render() {
        const { Personne, montre, elapsedTime } = this.state;

        return (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                {/* Bouton pour afficher ou cacher le profil */}
                <button onClick={this.toggleMontrer}>
                    {montre ? "Cacher le profil" : "Afficher le profil"}
                </button>

                {/* Affichage conditionnel du profil */}
                {montre && (
                    <div style={{ marginTop: "20px" }}>
                        {/* Image de profil */}
                        <img
                            src={Personne.imgSrc}
                            alt="Profil"
                            style={{ borderRadius: "50%", width: "150px", height: "150px" }}
                        />
                        {/* Nom complet */}
                        <h1>{Personne.fullName}</h1>
                        {/* Biographie */}
                        <p>{Personne.bio}</p>
                        {/* Profession */}
                        <h2>{Personne.profession}</h2>
                    </div>
                )}

                {/* Affichage du temps écoulé */}
                <p>Temps écoulé depuis le montage : {elapsedTime} secondes</p>
            </div>
        );
    }
}

export default App;