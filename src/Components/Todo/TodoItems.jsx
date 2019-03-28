import React from 'react';
import { Hidden, Typography, Paper, Grid } from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars';

const TodoItems = () => {
	return (
		<React.Fragment>
			{/* Desktop View */}
			<div
				style={{
					paddingBottom: '2em'
				}}
			>
				<Hidden xsDown>
					<Grid
						item
						xs={3}
						style={{
							marginLeft: '4px',
							height: '100vh',
							overflow: 'auto',
							overflowY: 'hidden',
							paddingTop: '0px'
						}}
					>
						<Scrollbars autoHide={true} autoHideTimeout={2000} autoHideDuration={400}>
							<Paper
								style={{
									padding: '20px'
								}}
							>
								<Typography>
									{' '}
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut eleifend purus,
									eget aliquet libero. Fusce facilisis orci quam, a vehicula ipsum elementum id. Etiam
									tristique cursus dapibus. Vivamus eu velit sapien. Etiam non magna venenatis,
									sodales arcu sed, mollis turpis. Curabitur vitae enim ornare, malesuada dui
									molestie, bibendum sem. Morbi feugiat tempor turpis, sit amet tempus augue
									ullamcorper interdum. Etiam porta at arcu egestas vestibulum. Aenean varius tortor
									nunc, sit amet interdum elit pulvinar non. Donec quis ex at libero commodo
									elementum. Fusce nec euismod nulla. In sodales ligula vel pulvinar tristique.
									Vestibulum lorem odio, sollicitudin ut libero nec, pharetra interdum neque. Fusce
									cursus accumsan odio, at rhoncus tortor sagittis in. Aliquam a erat scelerisque,
									pulvinar nisi vel, gravida justo. Nunc ut neque metus. Aenean vel congue mauris.
									Maecenas ac iaculis justo. Morbi at malesuada diam. Aenean dictum sed tellus sed
									imperdiet. Nulla facilisi. Sed at felis quis augue eleifend ultrices. Ut in sagittis
									nulla, sed laoreet enim. Fusce tincidunt ornare est ac blandit. Curabitur sed
									commodo nunc, a sagittis sem. Donec gravida enim ac pretium varius. Etiam lobortis
									tortor at mauris convallis viverra. Curabitur at aliquet ex, ut accumsan justo. Nunc
									elit lacus, luctus a est in, pretium efficitur erat. Sed pellentesque tempor arcu,
									id commodo orci egestas id. Duis ac aliquam tortor, vel vestibulum ex. Praesent
									volutpat neque non est porttitor, ut semper quam porttitor. Nulla scelerisque semper
									dui eu porttitor. Quisque aliquet vestibulum risus non congue. Curabitur elementum
									lacus id vehicula tempor. Maecenas vitae risus sit amet elit rutrum viverra. Nam
									tempor felis dui, a tincidunt magna tincidunt at. Nam massa leo, sollicitudin ut dui
									vitae, viverra bibendum libero. Vestibulum vestibulum dolor lorem, a fringilla leo
									ullamcorper id. Nulla imperdiet aliquam orci, et sagittis ex imperdiet non.
									Pellentesque semper suscipit velit a mattis. Nullam pulvinar dui nec velit blandit,
									ac condimentum orci tincidunt. Praesent enim eros, gravida ut elit in, rhoncus
									bibendum tortor. Quisque dictum augue vel dui vestibulum interdum. Quisque eget
									egestas magna. Vestibulum non bibendum risus. Nunc vitae laoreet lorem. Integer
									faucibus lacinia tempor. Mauris id odio sagittis, mattis sem in, volutpat enim.
									Etiam sed egestas odio. Pellentesque tincidunt mattis metus tristique malesuada.
									Donec vitae augue arcu. Donec eget justo ac risus dapibus consequat quis eget arcu.
									In hac habitasse platea dictumst. Proin euismod est metus, quis lobortis justo
									sagittis a. Mauris tempus ante in tortor viverra, in sollicitudin risus finibus.
									Donec urna ligula, tempor nec velit nec, dapibus eleifend nulla. Fusce a erat
									viverra, dignissim nibh vel, dapibus eros. Quisque ut euismod lectus, quis vulputate
									libero. Nam sed hendrerit nisl. Donec cursus purus ut elit tristique euismod.
									Maecenas at est eleifend, facilisis tellus hendrerit, bibendum erat. Curabitur vitae
									elit efficitur nunc varius auctor. Morbi imperdiet magna mauris, at sagittis justo
									fringilla nec. Nam a viverra est. Mauris id vestibulum lectus, molestie maximus leo.
									Proin consequat tortor dui, eget efficitur elit lobortis in. In ut nisi vehicula
									elit bibendum pharetra. Quisque ornare, risus nec ornare iaculis, risus mauris
									lobortis nunc, vitae porttitor nisl purus non metus. Aenean auctor eros non ex
									fringilla porta. Nullam cursus pharetra orci eu efficitur. Aenean eget lorem
									convallis, vehicula ipsum a, pretium turpis. Donec a felis gravida ante finibus
									cursus. Maecenas consequat iaculis ipsum. Ut imperdiet non dui vel mollis. Donec
									sagittis fermentum purus. Nulla nec aliquam tellus. Praesent nec orci et ligula
									mollis luctus. Phasellus pellentesque in diam nec euismod. Suspendisse non feugiat
									nisl. Nunc varius purus a nisi ullamcorper, eu tincidunt leo hendrerit. Nulla
									euismod finibus lacus, quis sagittis massa venenatis eu. Donec sit amet imperdiet
									ante, ac consequat lectus. Vivamus sed dolor odio. In ac sem vel mauris scelerisque
									sollicitudin vel in ante. Nulla sodales turpis vitae sem faucibus porta. Nullam sed
									porttitor dui. In laoreet, urna eget consequat eleifend, risus ex condimentum
									mauris, in rhoncus lorem turpis ac quam. Nullam maximus finibus nisl, vel molestie
									risus egestas pellentesque. Vestibulum eu commodo nisl, et bibendum mauris. Nam sed
									ante mollis, bibendum justo sed, vestibulum dolor. Pellentesque tempus velit et
									risus lacinia, sed mattis ex ultricies. Nulla molestie pulvinar justo, ullamcorper
									ultricies justo eleifend in. Nulla facilisi. Aliquam a augue quis neque faucibus
									sagittis in vel ante. Mauris eget condimentum sem. Vivamus eu volutpat lorem.
									Phasellus luctus diam a nulla pharetra, a vehicula risus venenatis. In nec vulputate
									ex. Duis suscipit magna elit, nec elementum tortor blandit non. Praesent auctor,
									eros pretium pharetra commodo, erat nisi fringilla mi, placerat dignissim eros risus
									eu libero. Suspendisse potenti. Sed bibendum lacinia augue quis cursus. Nam quis
									velit vel enim luctus laoreet quis in erat. Proin urna magna, feugiat sed eros et,
									interdum maximus lacus. Class aptent taciti sociosqu ad litora torquent per conubia
									nostra, per inceptos himenaeos. Proin lacinia purus eget vulputate molestie.
									Pellentesque ac fringilla nisl, eget ornare tellus. Aenean elit ex, dapibus id
									elementum id, ultrices vitae augue. Donec vel lorem vel dolor ultrices sodales sit
									amet ut erat. Nulla eget ipsum id ex lacinia facilisis non et neque. Nunc aliquet
									tellus et arcu euismod congue. Sed eu dolor quis nisi pretium porttitor. Nulla
									dapibus ligula nec lorem vulputate mattis. Nulla nec consectetur mi. Fusce tincidunt
									accumsan magna, quis tincidunt tellus porta venenatis. Nullam quis lobortis mi.
									Mauris varius sagittis velit, quis blandit dolor varius et. Sed eu lacus a mi
									vehicula rhoncus at in nisl. Aliquam ac euismod quam. Vivamus in est neque. In
									mattis lorem nec neque vulputate dapibus. Nulla porttitor ullamcorper libero, nec
									sodales mi pellentesque at. Cras ultricies convallis tortor, ut blandit urna laoreet
									id. Nulla eleifend gravida massa quis faucibus. Phasellus laoreet, velit et
									fringilla pulvinar, massa purus porttitor diam, sed maximus lorem orci ut neque.
									Donec mattis ut ante nec finibus. Maecenas maximus elit sed mauris molestie
									efficitur. Duis vulputate tortor vitae tincidunt blandit. Nam vitae risus at arcu
									consectetur consequat. Etiam vel erat justo. Nullam ut aliquam nisl. Donec commodo
									dolor ultricies, laoreet turpis nec, vehicula lectus. Integer tempor a elit sit amet
									ullamcorper. Nam pulvinar volutpat justo placerat hendrerit. Interdum et malesuada
									fames ac ante ipsum primis in faucibus. Sed vel pellentesque lorem. Donec id gravida
									mi. Nunc id semper diam, vitae eleifend augue. Nam gravida sem non dictum
									vestibulum. Sed condimentum leo odio, ut placerat dui volutpat sit amet. In dictum
									diam in convallis dapibus. Donec porta eget ex at porta. Duis porttitor laoreet{' '}
								</Typography>
							</Paper>
						</Scrollbars>
					</Grid>
				</Hidden>
			</div>
			{/* Mobile view */}
			<Hidden smUp>
				<Typography>Heelo</Typography>
			</Hidden>
		</React.Fragment>
	);
};

export default TodoItems;
