// Character Constructor
export function Character(characterData) {
    this.name = characterData.name;
    this.status = characterData.status;
    this.species = characterData.species;
    this.gender = characterData.gender;
    this.image = characterData.image;
}

// Prototype Method
Character.prototype.getStatusBadge = function () {

    switch (this.status.toLowerCase()) {

        case "alive":
            return "🟢 Alive";

        case "dead":
            return "🔴 Dead";

        default:
            return "⚪ Unknown";
    }

};