'Use Strict';

/* Original code by panpawn! Modified for Equestria by CelestiaPrincess!*/

var color = require('../config/color');
hashColor = function(name, bold) {
	return (bold ? "<b>" : "") + "<font color=" + color(name) + ">" + (Users(name) && Users(name).connected && Users.getExact(name) ? Tools.escapeHTML(Users.getExact(name).name) : Tools.escapeHTML(name)) + "</font>" + (bold ? "</b>" : "");
}

exports.commands = {
	credit: 'creditos',
	credit: 'credits',
	credits: function (target, room, user) {
		this.popupReply("|html|" + "<font size=5>Creditos de Yomika</font><br />" +
					"<u>Owners:</u><br />" +
					"- " + hashColor('RulesOrmigah', true) + " (Creador y Fundador del servidor)<br />" +
                    "- " + hashColor('PrincipeBaka', true) + " (CSS del servidor)<br />" +
                    "- " + hashColor('Devonrawr', true) + " (Gatita del servidor)<br />" +
					"<br />" +
					"<u>Creditos Especiales</u><br />" +
					"- Servidor de Equestria.<br />" +
					"- Personas anonimas.<br />");
	},
};
