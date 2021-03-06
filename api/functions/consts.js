exports.CONSTANTS = {
	users: 'users',
	apiKey: 'apiKey',
	runs: 'runs',
};

exports.TABLE = {
	Scans: 'Scans',
	IgnoredUrls: 'IgnoredUrls',
	PerformanceThreshold: 'PerformanceThreshold',
	Subscriptions: 'Subscriptions',
	ScanResults: 'ScanResults',
};

// blob storage names cannot have uppercase or numbers
exports.BLOB = {
	lhr: 'lhr',
	htmlhint: 'htmlhint',
	codeAuditor: 'codeauditor',
};
