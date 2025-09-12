import { DashboardNav } from '../components/dashboard_nav';
import Layout from './layout';

interface DashboardProps {
    children: React.ReactNode;
}
export default function DashboardLayout({
    children,
}: DashboardProps): React.ReactElement {
    return (
        <Layout>
            <DashboardNav />
            {children}
        </Layout>
    );
}
