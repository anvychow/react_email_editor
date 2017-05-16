/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { stylizeBlock } from '../../actions';

const mapStateToProps = (state) => {
	return {
		template: state.template
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onPropChange: (prop, val, container, elementIndex) => {
			dispatch(stylizeBlock(prop, val, container, elementIndex));
		}
	};
};

const BlockSocialText = connect(
	mapStateToProps,
	mapDispatchToProps
)(({ id, blockOptions, onPropChange }) => {
	const initEditable = () => {
		window.tinymce.init({
			selector: `#id_${id} td.editable`,
			inline: true,
			plugins: [
			'advlist autolink lists link image charmap anchor',
			'searchreplace visualblocks code fullscreen',
			'insertdatetime media table contextmenu'
			],
			toolbar: 'insertfile | styleselect | bold italic | bullist numlist | link image',
			init_instance_callback: (editor) => {
				editor.on('change', function (e) {
					onPropChange('text', e.target.targetElm.innerHTML, false, 1);
				});
			}
		})
	};
	const imgLocation = document.location.href.indexOf('nm_email_editor') > 0? `${document.location.origin}/wp-content/plugins/newsmine/include/email_editor/`: '/';
	return (
		<table
			width="100%"
			cellPadding="0"
			cellSpacing="0"
			role="presentation"
		>
			<tbody>
				<tr>
					<td>
						<table
							cellPadding="0"
							cellSpacing="0"
							role="presentation"
							style={blockOptions.elements[0]}
						>
							<tbody>
								<tr>
									<td
										style={{
											textAlign: blockOptions.elements[0].float
										}}
									>
										<a
										target="_blank"
										href={blockOptions.elements[0].ok_link}
										title={blockOptions.elements[0].ok_link}
										style={{
											"display": blockOptions.elements[0].ok_display
										}}
										>
											<img alt="ok" src={`${imgLocation}${blockOptions.elements[0].ok_source}`} />
										</a>
										<a
										target="_blank"
										href={blockOptions.elements[0].vk_link}
										title={blockOptions.elements[0].vk_link}
										style={{
											"display": blockOptions.elements[0].vk_display
										}}
										>
											<img alt="vk" src={`${imgLocation}${blockOptions.elements[0].vk_source}`} />
										</a>
										<a
										target="_blank"
										href={blockOptions.elements[0].youtube_link}
										title={blockOptions.elements[0].youtube_link}
										style={{
											"display": blockOptions.elements[0].youtube_display
										}}
										>
											<img alt="fb" src={`${imgLocation}${blockOptions.elements[0].youtube_source}`} />
										</a>
										<a
										target="_blank"
										href={blockOptions.elements[0].facebook_link}
										title={blockOptions.elements[0].facebook_link}
										style={{
											"display": blockOptions.elements[0].facebook_display
										}}
										>
											<img alt="yt" src={`${imgLocation}${blockOptions.elements[0].facebook_source}`} />
										</a>
									</td>
								</tr>
							</tbody>
						</table>
						<table
							cellPadding="0"
							cellSpacing="0"
							role="presentation"
							style={blockOptions.elements[1]}
						>
							<tbody>
								<tr>
									<td
									style={{
										"padding": "0 2%"
									}}
									className="editable"
									onClick={() => initEditable()}
									dangerouslySetInnerHTML={{__html: blockOptions?blockOptions.elements[1].text:'empty node'}}
									></td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</tbody>
		</table>
	);
});

export default BlockSocialText;
