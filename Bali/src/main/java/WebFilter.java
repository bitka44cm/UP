import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

public class WebFilter implements Filter {

    @Override
    public void init(FilterConfig fConfig) throws ServletException {
        System.out.println("Filter start!");
    }

    @Override
    public void destroy() {
        System.out.println("Filter destroy!");
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        long start = System.currentTimeMillis();
        filterChain.doFilter(servletRequest, servletResponse);

        HttpServletRequest req = (HttpServletRequest) servletRequest;

        String method = req.getMethod();
        String url = req.getRequestURL().toString();

        long end = System.currentTimeMillis();

        System.out.printf("%s - %s - %dms%n", method, url, (end - start));
    }
}
