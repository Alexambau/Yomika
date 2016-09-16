'Use Strict';

/* Original code by panpawn! Modified for Equestria by CelestiaPrincess!*/

var color = require('../config/color');
hashColor = function(name, bold) {
	return (bold ? "<b>" : "") + "<font color=" + color(name) + ">" + (Users(name) && Users(name).connected && Users.getExact(name) ? Tools.escapeHTML(Users.getExact(name).name) : Tools.escapeHTML(name)) + "</font>" + (bold ? "</b>" : "");
}

exports.commands = {
	credit: 'credits',
	credits: function (target, room, user) {
		this.popupReply("|html|" + "<font size=5>Creditos de Equestria</font><br />" +
					"<u>Owners:</u><br />" +
					"- " + hashColor('RulesOrmigah', true) + " (Fundadora, Hoster, Programadora, CSS del Servidor)<br />" +
                    "- " + hashColor('PrincipeBaka', true) + " (Fundadora, Hoster, Foro, CSS del Foro)<br />" +
                    "- " + hashColor('Devonrawr', true) + " (Fundadora, Hoster)<br />" +
					"<br />" +
					"<u>Creditos Especiales</u><br />" +
					"- Servidor de Equestria por dar el codigo de el servidor.<br />" +
					"- Personas anonimas.<br />");
	},
};
