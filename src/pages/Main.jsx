import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import FilePreview from '../components/FilePreview';
import FileInput from '../components/FileInput';

const MainPage = memo(function MainPage() {
	const [file, setFile] = useState(null);

	return (
		<>
			{file ? <FilePreview file={file} /> : <FileInput onFileSelected={setFile} />}
			<button onClick={() => setFile(null)}>Repeat</button>
		</>
	);
});

// MainPage.propTypes = {};

export default MainPage;
