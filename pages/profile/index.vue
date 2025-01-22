<template>
	<view class="profile-container">
		<view class="header">
			<text class="title">我的学习</text>
		</view>

		<view class="stats-container">
			<view class="stat-card">
				<text class="stat-value">12</text>
				<text class="stat-label">学习天数</text>
			</view>

			<view class="stat-card">
				<text class="stat-value">86</text>
				<text class="stat-label">掌握拼音</text>
			</view>

			<view class="stat-card">
				<text class="stat-value">3</text>
				<text class="stat-label">成就徽章</text>
			</view>
		</view>

		<view class="section">
			<text class="section-title">今日签到</text>
			<view class="checkin-card">
				<text>已签到</text>
				<uni-icons type="checkmarkempty" size="24" color="#4CAF50"></uni-icons>
			</view>
		</view>

		<view class="section">
			<text class="section-title">我的成就</text>
			<view class="badges-container">
				<view class="badge">
					<uni-icons type="star" size="24" color="#FFC107"></uni-icons>
					<text>拼音小能手</text>
				</view>
				<view class="badge">
					<uni-icons type="star" size="24" color="#FFC107"></uni-icons>
					<text>连续学习7天</text>
				</view>
				<view class="badge">
					<uni-icons type="star" size="24" color="#FFC107"></uni-icons>
					<text>完成50个练习</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {}
	}
}
</script>

<style lang="scss">
.profile-container {
	padding: 20px;
	background: linear-gradient(135deg, #f6f9fc 0%, #eef1f5 100%);
	min-height: 100vh;

	.header {
		margin-bottom: 30px;
		padding: 20px;
		background: #fff;
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0,0,0,0.05);

		.title {
			font-size: 24px;
			font-weight: bold;
			color: #333;
			text-align: center;
		}
	}

	.stats-container {
		display: flex;
		justify-content: space-between;
		margin-bottom: 30px;

		.stat-card {
			background: #fff;
			border-radius: 12px;
			padding: 20px;
			box-shadow: 0 2px 8px rgba(0,0,0,0.1);
			text-align: center;
			flex: 1;
			margin: 0 5px;

			.stat-value {
				font-size: 24px;
				font-weight: bold;
				color: #333;
				display: block;
				margin-bottom: 5px;
			}

			.stat-label {
				font-size: 14px;
				color: #666;
			}
		}
	}

	.section {
		margin-bottom: 30px;

		.section-title {
			font-size: 18px;
			font-weight: 500;
			color: #333;
			margin-bottom: 15px;
			display: block;
		}

		.checkin-card {
			background: #fff;
			border-radius: 12px;
			padding: 20px;
			box-shadow: 0 2px 8px rgba(0,0,0,0.1);
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.badges-container {
			display: flex;
			flex-wrap: wrap;
			gap: 15px;

			.badge {
				background: #fff;
				border-radius: 12px;
				padding: 15px;
				box-shadow: 0 2px 8px rgba(0,0,0,0.1);
				display: flex;
				align-items: center;
				gap: 10px;
				flex: 1 1 45%;
			}
		}
	}
}
</style>
