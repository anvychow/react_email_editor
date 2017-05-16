import React from 'react';

const BlockSocial = ({ blockOptions }) => {
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
							width="100%"
							cellPadding="0"
							cellSpacing="0"
							role="presentation"
						>
							<tbody>
								<tr>
									<td
									style={blockOptions.elements[0]}
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
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default BlockSocial;
