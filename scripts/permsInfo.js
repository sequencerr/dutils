var permsInfo = {
	CREATE_INSTANT_INVITE: { bitwise: 0x00000001, administrative: false, global: false, channelType: 'tv' },
	KICK_MEMBERS: { bitwise: 0x00000002, administrative: true, global: true, channelType: '' },
	BAN_MEMBERS: { bitwise: 0x00000004, administrative: true, global: true, channelType: '' },
	ADMINISTRATOR: { bitwise: 0x00000008, administrative: true, global: true, channelType: '' },
	MANAGE_CHANNELS: { bitwise: 0x00000010, administrative: true, global: true, channelType: 'tv' },
	MANAGE_GUILD: { bitwise: 0x00000020, administrative: true, global: true, channelType: '' },
	ADD_REACTIONS: { bitwise: 0x00000040, administrative: false, global: false, channelType: 't' },
	VIEW_AUDIT_LOG: { bitwise: 0x00000080, administrative: false, global: true, channelType: '' },
	VIEW_CHANNEL: { bitwise: 0x00000400, administrative: false, global: false, channelType: 'tv' },
	SEND_MESSAGES: { bitwise: 0x00000800, administrative: false, global: false, channelType: 't' },
	SEND_TTS_MESSAGES: { bitwise: 0x00001000, administrative: false, global: false, channelType: 't' },
	MANAGE_MESSAGES: { bitwise: 0x00002000, administrative: true, global: false, channelType: 't' },
	EMBED_LINKS: { bitwise: 0x00004000, administrative: false, global: false, channelType: 't' },
	ATTACH_FILES: { bitwise: 0x00008000, administrative: false, global: false, channelType: 't' },
	READ_MESSAGE_HISTORY: { bitwise: 0x00010000, administrative: false, global: false, channelType: 't' },
	MENTION_EVERYONE: { bitwise: 0x00020000, administrative: false, global: false, channelType: 't' },
	USE_EXTERNAL_EMOJIS: { bitwise: 0x00040000, administrative: false, global: false, channelType: 't' },
	CONNECT: { bitwise: 0x00100000, administrative: false, global: false, channelType: 'v' },
	SPEAK: { bitwise: 0x00200000, administrative: false, global: false, channelType: 'v' },
	MUTE_MEMBERS: { bitwise: 0x00400000, administrative: false, global: false, channelType: 'v' },
	DEAFEN_MEMBERS: { bitwise: 0x00800000, administrative: false, global: false, channelType: 'v' },
	MOVE_MEMBERS: { bitwise: 0x01000000, administrative: false, global: false, channelType: 'v' },
	USE_VAD: { bitwise: 0x02000000, administrative: false, global: false, channelType: 'v' },
	PRIORITY_SPEAKER: { bitwise: 0x00000100, administrative: false, global: false, channelType: 'v' },
	CHANGE_NICKNAME: { bitwise: 0x04000000, administrative: false, global: true, channelType: '' },
	MANAGE_NICKNAMES: { bitwise: 0x08000000, administrative: false, global: true, channelType: '' },
	MANAGE_ROLES: { bitwise: 0x10000000, administrative: true, global: true, channelType: 'tv' },
	MANAGE_WEBHOOKS: { bitwise: 0x20000000, administrative: true, global: false, channelType: 'tv' },
	MANAGE_EMOJIS: { bitwise: 0x40000000, administrative: false, global: true, channelType: '' }
};
var permsBitwise = {};
for (var k in permsInfo) permsBitwise[k] = permsInfo[k].bitwise;
var permsAll = [];
for (var k in permsInfo) permsAll.push(k);
var permsText = [];
for (var k in permsInfo) if (['t', 'tv'].includes(permsInfo[k].channelType)) permsText.push(k);
var permsVoice = [];
for (var k in permsInfo) if (permsInfo[k].channelType == 'v') permsVoice.push(k);
var permsGeneral = [];
for (var k in permsInfo) if (!permsInfo[k].channelType) permsGeneral.push(k);
