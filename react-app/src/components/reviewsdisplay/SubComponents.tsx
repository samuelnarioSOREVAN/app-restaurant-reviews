import React from 'react';

import { Gauge } from '@danielherrerohernando/matteoaffinity-storybook';

export const ReviewGauge = ({ data, text }) => (
	<div style={{ margin: '0 8px' }}>
		<Gauge diameter={70} thickness={3} innerColor={'rgb(247, 247, 247)'} data={data}></Gauge>
		<p style={{ marginTop: '20px', textAlign: 'center', fontSize: '2.3em' }}>{text}</p>
	</div>
);

export const OverlayTitle = ({ name }) => (
	<div style={{ textAlign: 'center', width: '70%' }}>
		<p>GuideSmiths reviews</p>
		<div style={{ height: '2px', width: '100%', borderTop: '1px solid white' }}></div>
		<h2>{name}</h2>
	</div>
);

const ReviewSubRate = ({ topic, rate }) => (
	<div>
		<h5 style={{ margin: '3px  0 0 10px' }}>
			<span style={{ fontWeight: 300 }}>{topic}:</span> {rate}
		</h5>
	</div>
);
export const ReviewRates = () => (
	<div
		style={{
			width: 'auto',
			display: 'flex',
			justifyContent: 'flex-start',
			alignItems: 'center',
		}}
	>
		<ReviewSubRate topic="Cuisine" rate={7.8}></ReviewSubRate>
		<ReviewSubRate topic="Setting" rate={4.3}></ReviewSubRate>
		<ReviewSubRate topic="Service" rate={6.7}></ReviewSubRate>
	</div>
);
