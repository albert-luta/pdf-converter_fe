export const preventDefaults = (e) => {
	e.preventDefault();
	e.stopPropagation();
};

export const getExtension = (file) => {
	const splitterArray = file.name.split('.');

	// Doesn't have an ext, most probably is a folder
	if (splitterArray.length === 1) return null;

	return splitterArray[splitterArray.length - 1];
};
