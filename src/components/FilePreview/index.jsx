import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { FilePreviewContainerCss, FilePreviewCss, FileContentCss } from './index.css';
import { getExtension } from '../../utils';

const FilePreview = memo(function FilePreview({ file }) {
	const ext = getExtension(file);

	return (
		<FilePreviewContainerCss>
			<FilePreviewCss src={require(`../../assets/previews/${ext}.png`)} alt="File preview" />
			<FileContentCss>{file.name}</FileContentCss>
		</FilePreviewContainerCss>
	);
});

// FilePreview.propTypes = {};

export default FilePreview;
