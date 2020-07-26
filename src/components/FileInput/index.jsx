import React, { memo, useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { FileInputContainerCss, InputHidden } from './index.css';
import { preventDefaults, getExtension } from '../../utils';

const FileInput = memo(function FileInput({ onFileSelected }) {
	const [isHoveringOverWithFile, setIsHoveringOverWithFile] = useState(false);
	const inputRef = useRef(null);

	const enableIsHoverOverWithFile = useCallback((e) => {
		preventDefaults(e);
		setIsHoveringOverWithFile(true);
	}, []);
	const disableIsHoverOverWithFile = useCallback((e) => {
		preventDefaults(e);
		setIsHoveringOverWithFile(false);
	}, []);
	const handleFiles = useCallback(
		(files) => {
			if (!files?.length) return;

			// At this moment we are supporting just 1 file
			const file = files[0];
			// If it is a folder, don't do anything
			if (!getExtension(file)) return;

			onFileSelected(file);
		},
		[onFileSelected]
	);

	const onDrop = useCallback(
		(e) => {
			disableIsHoverOverWithFile(e);
			handleFiles(e.dataTransfer.files);
		},
		[disableIsHoverOverWithFile, handleFiles]
	);
	const onClick = useCallback(() => inputRef?.current?.click(), []);
	const onChange = useCallback(() => handleFiles(inputRef?.current?.files), [handleFiles]);

	return (
		<>
			<InputHidden type="file" ref={inputRef} onChange={onChange} />

			<FileInputContainerCss
				onDragEnter={enableIsHoverOverWithFile}
				onDragOver={enableIsHoverOverWithFile}
				onDragLeave={disableIsHoverOverWithFile}
				onDrop={onDrop}
				onClick={onClick}
				isHoveringOverWithFile={isHoveringOverWithFile}
			>
				<h3>Drag & Drop</h3>
				<h4>or</h4>
				<h3>Click to choose a file</h3>
			</FileInputContainerCss>
		</>
	);
});

FileInput.propTypes = {
	onFileSelected: PropTypes.func.isRequired
};

export default FileInput;
