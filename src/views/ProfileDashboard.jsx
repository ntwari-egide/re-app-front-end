import {DashboardLayout} from '../models/DashboardLayout'

export const ProfileDashboard = () => {
    return (
        <DashboardLayout defaultSelectedKeys={4} isMenuCollapsed={true}>
            <p>Here goes profile component details </p>
        </DashboardLayout>
    )
}