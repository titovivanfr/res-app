import Layout from '../../layouts/layout';

export default function Welcome(): React.ReactElement {
    return (
        <Layout>
            <div className="grid min-h-screen items-center justify-items-center p-8 font-sans sm:p-20">
                <p>welcome page</p>
            </div>
        </Layout>
    );
}
