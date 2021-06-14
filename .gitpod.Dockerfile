FROM gitpod/workspace-full

# Install custom tools, runtimes, etc.
# For example "bastet", a command-line tetris clone:
# RUN brew install bastet
#
# More information: https://www.gitpod.io/docs/config-docker/


ENV PATH="$PATH:$HOME/bin"
RUN echo 'export PATH=$PATH:$HOME/bin' >> ~/.bashrc

# start bit dev server
WORKDIR /workspace
RUN npm install --global @tembit/bvm
RUN export PATH=$PATH:$HOME/bin && \
  bvm install && \
  bit config set analytics_reporting false && \
  bit config set error_reporting false && \
  bit config set no_warnings true && \
  bit init --harmony

# Run import in own cache layer
CMD [ "bit", "--help" ]