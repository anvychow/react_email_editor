import React from 'react';

const OptionsHeader = ({ block, onPropChange }) => {
	return (
		<div>
			<div>
				<label>
					Align:
					<select onChange={(e) => onPropChange('textAlign', e.target.value, false, 0)}>
						<option value="left">left</option>
						<option value="right">right</option>
						<option value="center">center</option>
					</select>
				</label>
			</div>
			<div>
				<label>Height: <input type="text" value={block.options.container.height} onChange={(e) => onPropChange('height', e.target.value, true)} /></label>
			</div>
			<div>
				<label>Color: <input type="color" value={block.options.container.color} onChange={(e) => onPropChange('color', e.target.value, true)} /></label>
			</div>
			<div>
				<label>Background: <input type="color" value={block.options.container.backgroundColor} onChange={(e) => onPropChange('backgroundColor', e.target.value, true)} /></label>
			</div>
			<div>
				<label>
					Font family:
					<select style={{width: '50%'}} onChange={(e) => onPropChange('fontFamily', e.target.value, true, 0)}>
						<option value='Georgia, serif'>Georgia, serif</option>
						<option value='Tahoma, Geneva, sans-serif'>Tahoma, Geneva, sans-serif</option>
						<option value='Verdana, Geneva, sans-serif'>Verdana, Geneva, sans-serif</option>
						<option value='Arial, Helvetica, sans-serif'>Arial, Helvetica, sans-serif</option>
						<option value='Impact, Charcoal, sans-serif'>Impact, Charcoal, sans-serif</option>
						<option value='"Times New Roman", Times, serif'>"Times New Roman", Times, serif</option>
						<option value='"Courier New", Courier, monospace'>"Courier New", Courier, monospace</option>
						<option value='"Arial Black", Gadget, sans-serif'>"Arial Black", Gadget, sans-serif</option>
						<option value='"Lucida Console", Monaco, monospace'>"Lucida Console", Monaco, monospace</option>
						<option value='"Comic Sans MS", cursive, sans-serif'>"Comic Sans MS", cursive, sans-serif</option>
						<option value='"Trebuchet MS", Helvetica, sans-serif'>"Trebuchet MS", Helvetica, sans-serif</option>
						<option value='"Lucida Sans Unicode", "Lucida Grande", sans-serif'>"Lucida Sans Unicode", "Lucida Grande", sans-serif</option>
						<option value='"Palatino Linotype", "Book Antiqua", Palatino, serif'>"Palatino Linotype", "Book Antiqua", Palatino, serif</option>
					</select>
				</label>
			</div>
		</div>
	);
};

export default OptionsHeader;